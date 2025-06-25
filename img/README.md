## Image Optimization

For better performance, it is recommended to convert images in this directory to a modern format like WebP or AVIF.

For example, you can convert `iman.jpeg` to `iman.webp` using an online tool or a command-line utility like `cwebp`:

```bash
cwebp -q 80 img/iman.jpeg -o img/iman.webp
```

After converting the image, make sure to update the image source in the corresponding component. 