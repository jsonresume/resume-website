#!/usr/local/env bash
export RBENV_ROOT="${HOME}/.rbenv"
if [ -d "${RBENV_ROOT}" ]; then
  if [[ ! ":$PATH:" == *":$HOME/bin:"* ]]; then
    # only add to PATH if not already on it
    export PATH="${RBENV_ROOT}/bin:${PATH}"
  fi
  eval "$(rbenv init -)"
fi
