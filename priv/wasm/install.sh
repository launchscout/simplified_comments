set -e

OS=''
case `uname` in
  Darwin*)  OS="macos" ;; 
  Linux*)   OS="linux" ;;
  *)        echo "unknown os: $OSTYPE" && exit 1 ;;
esac

ARCH=`uname -m`
case "$ARCH" in
  ix86*|x86_64*)    ARCH="x86_64" ;; 
  arm64*|aarch64*)  ARCH="aarch64" ;;
  *)                echo "unknown arch: $ARCH" && exit 1 ;;
esac


export TAG="v1.0.0-rc4"
curl -L -O "https://github.com/extism/js-pdk/releases/download/$TAG/extism-js-$ARCH-$OS-$TAG.gz"
gunzip extism-js*.gz
sudo mv extism-js-* /usr/local/bin/extism-js
chmod +x /usr/local/bin/extism-js
