The framework used is [Spectacle](https://github.com/FormidableLabs/spectacle/).

Add `?print` for layout that is suitable for PDF export.

Add `?print&export` for background-free printer-friendly version.

To build the website in docker to avoid `node` in the OS one can run:

```
host$ docker run -ti -v $PWD:/mnt node:carbon /bin/bash
container# cd /mnt && ./build.sh YYYY/event-name
container# cd YYYY/event-name && sed -i s/localhost/0.0.0.0/ server.js && node server.js
```
