import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-block-start: ${({ theme }) => theme.spacing(2)};
  page-break-inside: avoid; /* 중간 잘림 방지 */
`;

export const TitleRow = styled.div<{ $showBar: boolean }>`
  display: grid;
  grid-template-columns: ${({ $showBar }) => ($showBar ? "4px auto" : "auto")};
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const TitleBar = styled.i`
  display: block;
  width: 0.25rem;
  height: 1.5rem;
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const TitleText = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.text};
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
  grid-template-columns: 0.5rem auto;
  align-items: start;
  column-gap: ${({ theme }) => theme.spacing(1.5)};
  color: ${({ theme }) => theme.color.text};
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.md};
  white-space: pre-wrap;

  & mark {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.markText};
    /* font-weight: ${({ theme }) => theme.fontWeight.bold}; */
  }
`;

export const Marker = styled.span`
  display: inline-flex;
  justify-content: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
`;
