import styled from "@emotion/styled";

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const TitleRow = styled.div<{ $showBar: boolean }>`
  display: grid;
  grid-template-columns: ${({ $showBar }) => ($showBar ? "4px auto" : "auto")};
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const TitleBar = styled.i`
  display: block;
  width: 4px;
  height: 24px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const TitleText = styled.h2`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.fg};
  line-height: normal;
`;

export const Ul = styled.ul<{ $level: number }>`
  list-style: none;
  margin: 0;
  padding-left: ${({ theme, $level }) =>
    `calc(${theme.spacing(1)} * ${Math.max(0, $level)})`};
  display: grid;
`;

export const Li = styled.li`
  display: grid;
  grid-template-columns: 8px auto;
  align-items: start;
  column-gap: ${({ theme }) => theme.spacing(1.5)};
  color: ${({ theme }) => theme.color.fg};
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.md};
  white-space: pre-wrap;

  & mark {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.fg};
  }
`;

export const Marker = styled.span`
  display: inline-flex;
  justify-content: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.fg};
`;
