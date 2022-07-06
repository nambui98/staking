import vhIdRequest from '../utils/vhIdRequest';

export const checkVerifyEmail = async (email: string) => {
  return vhIdRequest({
    url: `befid/verify-email?email=${email}`,
    method: 'get',
  })
}