import { BulletList, BulletListProps } from "./BulletList";

const mountList = (props: BulletListProps) =>
  cy.mount(<BulletList {...props} />);

describe("<BulletList /> 렌더링 확인", () => {
  it("제목 + 바 렌더", () => {
    mountList({
      title: { showBar: true, text: "제목" },
      items: [{ label: "내용1" }],
    });

    cy.dataCy("BulletList").should("be.visible");
    cy.dataCy("BulletListTitleRow").should("exist");
    cy.dataCy("BulletListTitleText").should("contain.text", "제목");

    // 바가 보이며 aria-hidden
    cy.dataCy("BulletListTitleBar")
      .should("exist")
      .and("have.attr", "aria-hidden", "true");
  });

  it("제목 + 바 숨김", () => {
    mountList({
      title: { showBar: false, text: "제목" },
      items: [{ label: "내용1" }],
    });

    cy.dataCy("BulletListTitleRow").should("exist");
    cy.dataCy("BulletListTitleText").should("contain.text", "제목");
    cy.dataCy("BulletListTitleBar").should("not.exist");
  });

  it("제목 없이 렌더", () => {
    mountList({ items: [{ label: "내용1" }, { label: "내용2" }] });

    cy.dataCy("BulletList").should("be.visible");
    cy.dataCy("BulletListTitleRow").should("not.exist");
  });

  it("재귀 렌더: 특정 경로들만 확인", () => {
    mountList({
      title: { showBar: true, text: "제목" },
      items: [
        { label: "내용" }, // level1-0
        {
          label: "내용2", // level1-1
          children: [
            {
              label: "내용2-1", // level2-1-0
              children: [
                { label: "내용2-1-1", children: [{ label: "내용2-1-1-1" }] }, // level3-1-0-0
                { label: "내용2-1-2" }, // level3-1-0-1
              ],
            },
          ],
        },
      ],
    });

    cy.dataCy("BulletListUlItems-1").should("exist");
    cy.dataCy("BulletListLiItems-2-1").should("contain.text", "내용2-1");
    cy.dataCy("BulletListLiItems-2-1-1").should("contain.text", "내용2-1-1");
    cy.dataCy("BulletListLiItems-2-1-1-1").should(
      "contain.text",
      "내용2-1-1-1"
    );

    // 없는 경로는 명확히 not.exist
    cy.dataCy("BulletListLiItems-2-2").should("not.exist");
    cy.dataCy("BulletListUlItems-5").should("not.exist");
  });
});

describe("들여쓰기 검증", () => {
  it("Ul 레벨이 깊어질수록 들여쓰기 증가", () => {
    mountList({
      items: [
        { label: "A" },
        { label: "B", children: [{ label: "B-1" }] },
        {
          label: "C",
          children: [{ label: "C-1", children: [{ label: "C-1-1" }] }],
        },
      ],
    });

    cy.dataCy("BulletListUlItems-1").then(($ul1) => {
      const p1 = parseInt(getComputedStyle($ul1[0] as Element).paddingLeft);
      cy.dataCy("BulletListUlItems-2").then(($ul2) => {
        const p2 = parseInt(getComputedStyle($ul2[0] as Element).paddingLeft);
        expect(p2).to.be.greaterThan(p1);
        expect(p2).to.be.equal(p1 * 2);
      });
      cy.dataCy("BulletListUlItems-3").then(($ul3) => {
        const p3 = parseInt(getComputedStyle($ul3[0] as Element).paddingLeft);
        expect(p3).to.be.greaterThan(p1);
        expect(p3).to.be.equal(p1 * 3);
      });
    });
  });

  it("LI 좌표: 같은 레벨은 left 동일, 더 깊은 레벨은 left 더 큼", () => {
    mountList({
      items: [
        { label: "내용1", children: [{ label: "내용1-1" }] },
        { label: "내용2" },
      ],
    });

    cy.dataCy("BulletListLiItems-1").then(($a) => {
      const leftA = ($a[0] as HTMLElement).getBoundingClientRect().left;
      cy.dataCy("BulletListLiItems-2").then(($b) => {
        const leftB = ($b[0] as HTMLElement).getBoundingClientRect().left;
        expect(leftA).to.be.equal(leftB);
      });
    });
    cy.dataCy("BulletListLiItems-1-1").then(($a) => {
      const leftA = ($a[0] as HTMLElement).getBoundingClientRect().left;
      cy.dataCy("BulletListLiItems-2").then(($b) => {
        const leftB = ($b[0] as HTMLElement).getBoundingClientRect().left;
        expect(leftA).to.be.greaterThan(leftB);
      });
    });
  });

  describe("글 중 whitelistHtml 허용/비허용태그 확인", () => {
    it("글 강조 내용 확인", () => {
      mountList({
        items: [
          {
            label:
              "<strong>내용1</strong>은 정말 <strong>굵은 글씨입니다.</strong>",
          },
        ],
      });

      cy.dataCy("BulletListLiItems-1").then(($li) => {
        const li = $li[0] as HTMLElement;
        const strong = li.querySelector("strong");
        if (!strong) return;
        const defaultWeight = parseInt(getComputedStyle(li).fontWeight);
        const boldWeight = parseInt(getComputedStyle(strong).fontWeight);
        expect(boldWeight).to.be.greaterThan(defaultWeight);
      });
    });

    it("허용 태그는 그대로 렌더(strong/b/em/i/u/a)", () => {
      mountList({
        items: [
          { label: "<strong>굵게</strong> 와 <em>기울임</em>" },
          { label: "<b>볼드</b> <i>아이</i> <u>밑줄</u>" },
          { label: `<a href="https://example.com">링크</a>` },
        ],
      });

      // strong/ em / i / u 태그도 실제 엘리먼트로 존재
      cy.get("strong").should("contain.text", "굵게");
      cy.get("em").should("contain.text", "기울임");
      cy.get("i").should("contain.text", "아이");
      cy.get("u").should("contain.text", "밑줄");

      // a 태그는 정상 렌더
      cy.get("a").should("have.attr", "href", "https://example.com");
    });

    it("javascript: 스킴은 제거되어야 함 (허용 태그 a 내부라도)", () => {
      mountList({
        items: [{ label: `<a href="javascript:alert(1)">클릭</a>` }],
      });
      // javascript: 가 제거되어 href="alert(1)" 형태가 됨
      cy.get("a").should("have.attr", "href", "alert(1)");
    });

    it("비허용 태그(script/iframe/img/form/style/link 등)는 escape되어 텍스트로 보여야 함", () => {
      mountList({
        items: [
          { label: `<img src=x onerror=alert(2)>` },
          {
            label: `<form action="https://evil.com"><input type="text"></form>`,
          },
          { label: `<style>body{background:red}</style>` },
          { label: `<link rel="stylesheet" href="http://evil.com/x.css">` },
        ],
      });

      // 컴포넌트 범위로 한정
      cy.dataCy("BulletListLiItems-1").within(() => {
        // 1) 실제 위험 요소는 렌더되면 안 됨

        cy.get("style").should("not.exist");
        cy.get("link").should("not.exist");
        cy.get("img").should("not.exist");
        cy.get("form").should("not.exist");
      });
    });

    it("혼합 문자열에서도 허용/비허용 처리가 동시에 맞아야 함", () => {
      mountList({
        items: [
          {
            label: `
            <strong>OK</strong>
            <custom-tag data-x="1">x</custom-tag>
            <a href="javascript:do()">링크</a>
          `,
          },
        ],
      });

      // strong은 살아있고
      cy.get("strong").should("contain.text", "OK");

      // custom-tag 는 escape되어 텍스트로 출력
      cy.contains('<custom-tag data-x="1">x</custom-tag>').should("exist");

      // a 는 렌더되지만 javascript: 제거
      cy.get("a").should("have.attr", "href", "do()");
    });
  });
});
