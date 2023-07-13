import { api } from "./core"

export const Getissue = async() =>{
    const respone = await api.get('repos/kwonja/pre-onboarding-11th-3-02/issues')
    return respone;
}