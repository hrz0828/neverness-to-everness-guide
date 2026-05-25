# NTE 异环中文攻略站

Astro 4 + Tailwind CSS + MDX + Pagefind 的纯静态中文攻略站，适合部署到 Cloudflare Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

输出目录为 `dist`。

## Cloudflare Pages 部署

1. 将项目推送到 GitHub 或 GitLab。
2. 打开 Cloudflare Dashboard，进入 Pages，选择 Create a project。
3. 连接仓库。
4. 构建设置填写：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 环境变量可选：
   - `PUBLIC_SITE_URL`
   - `PUBLIC_ADSENSE_CLIENT`
6. 部署完成后绑定自定义域名。

## 内容维护

- 新增角色：在 `src/content/characters` 新增 `.mdx` 文件。
- 新增地图：在 `src/content/maps` 新增 `.mdx` 文件。
- 新增指南：在 `src/content/guides` 新增 `.mdx` 文件。
- 新增更新日志：在 `src/content/updates` 新增 `.mdx` 文件。

## 图片规范

图片放在 `public/images` 下，建议使用 WebP：

- 首页主视觉：`public/images/hero-nte.webp`
- 角色封面：`public/images/chars/*.webp`
- 地图封面：`public/images/maps/*.webp`
