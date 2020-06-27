#!/bin/sh
cd $TRAVIS_BUILD_DIR/v1
sbt ++$TRAVIS_SCALA_VERSION package