#!/bin/bash

ROOT=$( pwd )

SRC_DIR=$1
DST_DIR=$ROOT/public/$SRC_DIR

echo "==> Building $SRC_DIR to $DST_DIR"
cd $SRC_DIR

export PUBLIC_PATH_PREFIX=/$SRC_DIR
yarn install
yarn run build

mkdir -p $DST_DIR
cp -R dist $DST_DIR/dist
cp index.html $DST_DIR/index.html
[[ -f presentation.pdf ]] && cp presentation.pdf $DST_DIR/

cd $ROOT
