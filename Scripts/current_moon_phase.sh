#!/bin/bash

get_phase_day () {
  local cycle_length=2551443
  local now=$(date -ju +"%s")
  # fun fact: first new moon was 549300 seconds into 1970
  local new_moon_offset=549300
  local phase=$((($now - $new_moon_offset) % $cycle_length))
  echo $(printf "scale=5; (${phase} / 86400)" | bc)
}


get_moon_icon () {
  local phase_number=$(get_phase_day)
  # Multiply by 100000 so we can do integer comparison.  Go Bash!
  local phase_number_biggened=$(printf "scale=0; (${phase_number} * 100000) / 1" | bc)

  if   [ $phase_number_biggened -lt 43200 ];   then phase_icon="🌚"  # very new
  elif [ $phase_number_biggened -lt 159465 ];  then phase_icon="🌑"  # new
  elif [ $phase_number_biggened -lt 478395 ];  then phase_icon="🌒"  # waxing crescent
  elif [ $phase_number_biggened -lt 797326 ];  then phase_icon="🌓"  # first quarter
  elif [ $phase_number_biggened -lt 1116256 ]; then phase_icon="🌔"  # waxing gibbous
  elif [ $phase_number_biggened -lt 1232521 ]; then phase_icon="🌕"  # full
  elif [ $phase_number_biggened -lt 1318921 ]; then phase_icon="🌝"  # very full
  elif [ $phase_number_biggened -lt 1435186 ]; then phase_icon="🌕"  # full
  elif [ $phase_number_biggened -lt 1754117 ]; then phase_icon="🌖"  # waning gibbous
  elif [ $phase_number_biggened -lt 2073047 ]; then phase_icon="🌗"  # last quarter
  elif [ $phase_number_biggened -lt 2391977 ]; then phase_icon="🌘"  # waning crescent
  elif [ $phase_number_biggened -lt 2508243 ]; then phase_icon="🌑"  # new
  else phase_icon="🌚"  # very new
  fi
  echo $phase_icon
}

get_moon_icon
