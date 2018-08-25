The framework used is [Spectacle](https://github.com/FormidableLabs/spectacle/).

Add `?print` for layout that is suitable for PDF export.

Add `?print&export` for background-free printer-friendly version.

To build the website in docker to avoid `node` in the OS one can run:

```
host$ docker run --rm -ti -v $PWD:/mnt node:carbon /bin/bash
container# cd /mnt && yarn install && yarn run dev
```
