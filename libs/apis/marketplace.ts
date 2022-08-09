import vhIdRequest from '../utils/vhIdRequest';

export const checkVerifyEmail = async (email: string) => {
  return vhIdRequest({
    url: `https://api.befitter.io/befid/verify-email?email=${email}`,
    method: 'get',
  })
}