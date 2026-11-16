# Ponte Slek Lab

URL canônica: https://coreilabs.github.io/sleklabgamer/
Destino: https://sleklab.gamer.free/

Publique a raiz deste projeto no GitHub Pages do repositório `coreilabs/sleklabgamer` (Settings → Pages → Deploy from a branch → main → / root).

O HTML contém os metadados estáticos; o navegador redireciona por JavaScript. Sem JavaScript, há um link manual. Compartilhe a URL da ponte para utilizar esses metadados.

Os textos foram copiados dos valores padrão de `sleklab/app/Database/Seeds/CatalogSeeder.php`; alterações feitas no painel não são sincronizadas automaticamente. A imagem é uma cópia de `sleklab/opengraph.webp`.

Após editar JavaScript, execute `node tools/renew-assets.mjs` uma vez e publique `index.html`, `redirect.js` e `assets.json` juntos. O helper foi adaptado do projeto original. Ao trocar a imagem, gere outro token hexadecimal aleatório e atualize as três referências de imagem no HTML, preservando as dimensões reais.

Depois da publicação, verifique o HTML, o JavaScript e a imagem nas URLs versionadas e teste o link no WhatsApp. A prévia depende do aplicativo e do cache; novas versões não atualizam mensagens já enviadas automaticamente.

## Ponte de acesso

URL para compartilhar: https://coreilabs.github.io/sleklabgamer/login/
Destino: https://sleklab.gamer.free/login

Metadados copiados de `sleklab/app/Views/admin/login.php`. Publicar tamb?m a pasta `login/`. O helper renova os tokens de ambas as p?ginas; publique os HTMLs, os scripts e o manifesto juntos. A imagem mant?m a vers?o existente.
