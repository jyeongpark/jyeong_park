#!/usr/bin/env zsh
set -euo pipefail

if [[ $# -lt 1 || -z "${1// /}" ]]; then
  echo "Usage: $0 <component-name>"
  echo " ex) $0 button      -> Button"
  echo " ex) $0 list-item   -> ListItem"
  exit 1
fi

RAW="$1"


# kebab/snake/mixed -> PascalCase (zsh 호환)
to_pascal() {
  local s="$1"
  local out=""
  # 구분자(- _ 공백)를 공백으로 치환
  s="${s//-/ }"
  s="${s//_/ }"
  s="${s//  / }"

  # zsh: 단어 분해 (SH_WORD_SPLIT 로컬 적용)
  setopt local_options SH_WORD_SPLIT
  local p
  for p in $s; do
    [[ -z "$p" ]] && continue
    # ${(C)p} = 첫 글자 대문자, 나머지 소문자
    out+="${(C)p}"
  done

  print -r -- "$out"
}

NAME="$(to_pascal "$RAW")"
DIR="src/components/${NAME}"

if [[ -d "$DIR" ]]; then
  echo "❗ Already exists: $DIR"
  exit 1
fi

mkdir -p "$DIR"

# index.tsx (barrel for this component folder)
cat > "${DIR}/index.tsx" <<EOF
export { ${NAME} } from './${NAME}';
export type { ${NAME}Props } from './${NAME}';
EOF

# ${NAME}.style.tsx
cat > "${DIR}/${NAME}.style.tsx" <<'EOF'
import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
`;
EOF

# ${NAME}.tsx (component)
cat > "${DIR}/${NAME}.tsx" <<EOF
import React from 'react';
import { Div } from './${NAME}.style';

export type ${NAME}Props = React.HTMLAttributes<HTMLDivElement> & {
  
};

export const ${NAME} = ({...rest} : ${NAME}Props) => {
  return (
    <Div data-cy="${NAME}" {...rest}>
      ${NAME}
    </Div>
  )
}
EOF

# ${NAME}.stories.tsx (Storybook)
cat > "${DIR}/${NAME}.stories.tsx" <<EOF
import type { Meta, StoryObj } from '@storybook/react';
import { ${NAME}, ${NAME}Props } from './${NAME}';

const meta = {
  title: 'Components/${NAME}',
  component: ${NAME},
  args: { children: '${NAME}' },
  parameters: { layout: 'centered' },
  tags: ["autodocs"],
} satisfies Meta<typeof ${NAME}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Default = (args: ${NAME}Props) => {
  return <${NAME} {...args} />;
};
EOF

# ${NAME}.cy.tsx (Cypress CT)
cat > "${DIR}/${NAME}.cy.tsx" <<EOF
import React from 'react';
import { ${NAME} } from './${NAME}';

describe('<${NAME} />', () => {
  it('renders', () => {
    cy.mount(<${NAME} />);
    cy.dataCy("${NAME}").should("be.visible");
  });
});
EOF

# components barrel (packages/ui/src/components/index.ts) 업데이트
COMP_BARREL="src/components/index.ts"
touch "$COMP_BARREL"
grep -q "export \* from './${NAME}';" "$COMP_BARREL" || echo "export * from './${NAME}';" >> "$COMP_BARREL"

echo "✅ Created ${DIR}"
echo "   - index.tsx"
echo "   - ${NAME}.tsx"
echo "   - ${NAME}.style.tsx"
echo "   - ${NAME}.stories.tsx"
echo "   - ${NAME}.cy.tsx"