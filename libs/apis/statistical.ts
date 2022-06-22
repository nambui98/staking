import React from 'react';
import vhIdRequest from '../utils/vhIdRequest';

interface leaderboardProps {
  type: string
  limit: number
  offset: number
}

export const getLeaderboardData = async (params: leaderboardProps) => {
  return vhIdRequest({
    url: `fitx/leaderboard?type=${params.type}&limit=${params.limit}&offset=${params.offset}&leaderboardType=1`,
    method: 'get',
  })
}