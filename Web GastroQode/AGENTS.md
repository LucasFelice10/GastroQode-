<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep the public QResto experience as a single-page Spanish landing page with section anchors; this keeps the primary sales journey uninterrupted.
- Store all visual colors and typography as semantic tokens in `src/styles.css`; this preserves a consistent brand system across every section.
