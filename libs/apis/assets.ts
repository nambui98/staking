import vhIdRequest from '../utils/vhIdRequest';

export const getShoesDetails = async (shoesId: string) => {
  return vhIdRequest({
    url: `https://api.befitter.io/fitx/nft/info?type=shoes&id=${shoesId}`,
    method: 'get',
  })
}