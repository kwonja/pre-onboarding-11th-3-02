import { api } from "./core"
export const Org = "facebook"
export const Repo = "react"
export const Getissueapi = async(state : string = "all", sort : string = "created",page : number) =>{
        const respone = await api.get(`repos/${Org}/${Repo}/issues?state=${state}&sort=${sort}&page=${page}&per_page=4`)
        return respone;
}

export const GetIssueDetail = async(id : string | undefined) =>{
    const response = await api.get(`repos/${Org}/${Repo}/issues/${id}`)
    return response;
}