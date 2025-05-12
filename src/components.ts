// ===== FxContainer.ts =====
class FxContainer extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.flexDirection = "column";
    this.style.width = "100%";
    this.style.height = "100%";
    this.style.boxSizing = "border-box";

    const spacing = this.getAttribute("spacing") || "16";
    this.style.padding = `${spacing}px`;

    if (this.hasAttribute("scroll")) {
      this.style.overflow = "auto";
    }
  }
}
customElements.define("fx-container", FxContainer);

// ===== FxRow.ts =====
class FxRow extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.flexDirection = "row";

    if (this.hasAttribute("row-gap")) {
      this.style.rowGap = this.getAttribute("row-gap") + "px";
    }
    if (this.hasAttribute("col-gap")) {
      this.style.columnGap = this.getAttribute("col-gap") + "px";
    }
    if (!this.hasAttribute("row-gap") && !this.hasAttribute("col-gap") && this.hasAttribute("gap")) {
      const gap = this.getAttribute("gap") + "px";
      this.style.gap = gap;
    }

    if (this.hasAttribute("align")) this.style.alignItems = this.getAttribute("align");
    if (this.hasAttribute("justify")) this.style.justifyContent = this.getAttribute("justify");
    if (this.hasAttribute("wrap")) this.style.flexWrap = "wrap";
  }
}
customElements.define("fx-row", FxRow);

// ===== FxColumn.ts =====
class FxColumn extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.flexDirection = "column";

    if (this.hasAttribute("row-gap")) {
      this.style.rowGap = this.getAttribute("row-gap") + "px";
    }
    if (this.hasAttribute("col-gap")) {
      this.style.columnGap = this.getAttribute("col-gap") + "px";
    }
    if (!this.hasAttribute("row-gap") && !this.hasAttribute("col-gap") && this.hasAttribute("gap")) {
      const gap = this.getAttribute("gap") + "px";
      this.style.gap = gap;
    }

    if (this.hasAttribute("align")) this.style.alignItems = this.getAttribute("align");
    if (this.hasAttribute("justify")) this.style.justifyContent = this.getAttribute("justify");
    if (this.hasAttribute("wrap")) this.style.flexWrap = "wrap";
  }
}
customElements.define("fx-column", FxColumn);

// ===== FxItem.ts =====
class FxItem extends HTMLElement {
  connectedCallback() {
    if (this.hasAttribute("grow")) this.style.flexGrow = this.getAttribute("grow");
    if (this.hasAttribute("shrink")) this.style.flexShrink = this.getAttribute("shrink");
    if (this.hasAttribute("size")) this.style.flexBasis = this.getAttribute("size");
    if (this.hasAttribute("align")) this.style.alignSelf = this.getAttribute("align");
  }
}
customElements.define("fx-item", FxItem);
