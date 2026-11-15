const headings = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
].flatMap((t) => Array.from(document.getElementsByTagName(t)));
for(const heading of headings) {
  let directLinkToHeading = new URL("#"+heading.id, document.location.href).toString();
  heading.addEventListener("mousedown", () => {
    navigator.clipboard.writeText(directLinkToHeading);
    alert("Copied link to this heading");
  });
}
