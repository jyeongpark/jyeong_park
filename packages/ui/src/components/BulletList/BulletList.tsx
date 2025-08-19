import React from "react";
import {
  Wrapper,
  TitleRow,
  TitleBar,
  TitleText,
  Ul,
  Li,
  Marker,
} from "./BulletList.style";
import { whitelistHtml } from "../../utils";

export type BulletKind = "dot" | "dash" | "none" | "custom";

export interface ListNode {
  /** 항목 라벨(문자열 또는 JSX) */
  label: React.ReactNode;
  /** 마커 종류 (기본: 'dot') */
  bullet?: BulletKind;
  /** bullet='custom' 일 때 필수 (예: <Icon />) */
  customBullet?: React.ReactNode;
  /** 하위 항목들 (무한 깊이) */
  children?: ListNode[];
}

export interface BulletListProps {
  /** 상단 제목 옵션 showBar: 왼쪽 세로 바 표시 여부, text: 제목 텍스트 */
  title?: {
    showBar?: boolean;
    text: React.ReactNode;
  };
  /** depth1 아이템들 (children으로 계속 재귀 확장) */
  items: ListNode[];
}

const renderMarker = (node: ListNode) => {
  const kind = node.bullet ?? "dot";
  if (kind === "none") return null;
  if (kind === "custom")
    return <Marker aria-hidden>{node.customBullet}</Marker>;
  if (kind === "dash") return <Marker aria-hidden>–</Marker>; // en-dash
  return <Marker aria-hidden>•</Marker>; // dot (기본)
};

const RenderList: React.FC<{
  nodes: ListNode[];
  level: number;
  path?: string; //부모경로
}> = ({ nodes, level, path = "" }) => {
  if (!nodes?.length) return null;
  return (
    <Ul $level={level} role="list" data-cy={`BulletListUlItems-${level}`}>
      {nodes.map((node, idx) => {
        const currentPath = `${path ? `${path}-` : ""}${idx + 1}`;
        return (
          <Li key={currentPath} data-cy={`BulletListLiItems-${currentPath}`}>
            {renderMarker(node)}
            <div>
              {typeof node.label === "string" ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: whitelistHtml(node.label),
                  }}
                />
              ) : (
                node.label
              )}
              {node.children && node.children.length > 0 && (
                <RenderList
                  nodes={node.children}
                  level={level + 1}
                  path={currentPath}
                />
              )}
            </div>
          </Li>
        );
      })}
    </Ul>
  );
};

export const BulletList: React.FC<BulletListProps> = ({ title, items }) => {
  return (
    <Wrapper data-cy="BulletList">
      {title && (
        <TitleRow $showBar={!!title.showBar} data-cy="BulletListTitleRow">
          {title.showBar && (
            <TitleBar data-cy="BulletListTitleBar" aria-hidden />
          )}
          <TitleText data-cy="BulletListTitleText">{title.text}</TitleText>
        </TitleRow>
      )}
      <RenderList nodes={items} level={1} />
    </Wrapper>
  );
};
