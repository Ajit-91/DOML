
 const fetchApi = async (route, options) => {
    try {
        const res = await fetch(route, options)
        const result = await res.json()
        if(res.ok){
            return {error : false, data : result};
        }else{
            throw new Error(result?.message || "something went wrong")
        }
    } catch (err) {
        console.log("error",err)
        return {error : true, message : err.message}
    }
}

export default fetchApi;
  