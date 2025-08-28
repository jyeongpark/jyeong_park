import styled from "@emotion/styled";

export const SectionRoot = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  /* divider 유틸 */
  .divider {
    border-block-end: 1px solid ${({ theme }) => theme.color.border};
    padding-block-end: ${({ theme }) => theme.spacing(2)};
    margin-block-end: ${({ theme }) => theme.spacing(2)};
  }
`;
