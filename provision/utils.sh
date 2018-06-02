#! /usr/bin/env bash

# credit to: https://gist.github.com/JamieMason/4761049
# return 1 if global command line program installed, else 0
# example
# echo "node: $(program_is_installed node)"
function program_is_installed {
  # set to 1 initially
  local return_
  return_=1
  # set to 0 if not found
  type "$1" >/dev/null 2>&1 || { return 1; }
  # return value
  return 0
}

function echo_heading {
  local string
  string=$1
  local string_length
  string_length=${#string}

  local underline
  underline=""
  for ((i=1;i<=string_length;i++)) ; do
    underline="${underline}-"
  done

  echo -e "\\n$string"
  echo "$underline"
}
