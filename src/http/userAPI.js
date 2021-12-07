import {$host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (name, login, password, role, phone) => {
    const {data} = await $host.post('register', {name, login, password, role, phone})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login, password) => {
    const {data} = await $host.post('auth', {login, password})
    localStorage.setItem('token', data.token)
    return data.token
}

export const profile = async () => {
    const token = localStorage.getItem('token')
    const {data} = await $host.get('profile',
        { headers: {"Authorization" : `Bearer ${token}`}})
    console.log(data.login)
    return data
}

export const offers = async (insuranceTypeId, insurerId, term, cost, description) => {
    await $host.post('offers', {insuranceTypeId, insurerId, term, cost, description})
}

export const insuranceType = async () => {
    const {data} = await $host.get('types')
    return data;
}


