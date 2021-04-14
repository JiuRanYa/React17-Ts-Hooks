interface Config extends RequestInit {
  data?: object,
  token?: string
}

export const http = async (
  endPoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const mergeConfig = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-type": data ? "application/json" : ""
    },
    ...customConfig
  }
  return window.fetch(endPoint, mergeConfig).then((response) => {
    // token 失效
    if (response.status === 403) {
      window.location.reload()
      return Promise.reject({message: "请重新登录"})
    }
    const data = response.json()
    if (response.ok) {
      return data
    } else {
      // 网络连接失败
      return Promise.reject(data)
    }
  })
}

export const useHttp = () => {
  // TODO: user的全局状态管理
  const user = {
    token: "weaweda"
  }

  return (...[endPoint, config]: Parameters<typeof http>) => http(endPoint, { ...config, token: user?.token })
}