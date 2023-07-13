import { api } from "./core"
export const Org = "CBNU-SportsCenter"
export const Repo = "CBNU_SportsCenter"
export const Getissueapi = async() =>{
    const respone = await api.get(`repos/${Org}/${Repo}/issues`)
    return respone;
}

export const GetIssueDetail = async(id : string | undefined) =>{
    const response = await api.get(`repos/${Org}/${Repo}/issues/${id}`)
    return response;
}