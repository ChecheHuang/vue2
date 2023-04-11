export function getData(root,url,params={}){
    root.service.get(url,{params}).then(res=>{
        if(res.data.status===200){
            const newData = res.data.data.map((item) => {
                const newItem = { ...item };
                newItem.sex_text = newItem.sex === "1" ? "男" : "女";
                return newItem;
            });
            root.tableData = newData
            root.total = res.data.total
        }
    }).catch(err=>{
        throw err
    })
}
import qs from 'qs'
export function changeInfo(root,method,url,form,callback){
    let data = qs.stringify(form)
    root.service[method](url,data).then(res=>{
        if (res.data.status === 200) {
            root.dialogFormVisible = false;
            root.$message({ type: "success", message: res.data.message });
            callback(root,url)
        }
    }).catch(err => {
        throw err
    })
}
export function deleteInfo(root,url,id,callback){
    root.$alert("確認刪除嗎?", "提示", {
        confirmButtonText: "確定",
        callback: () => {
            root.service.delete(`${url}/${id}`).then(res=>{
                if (res.data.status === 200) {
                    callback(root,url)
                    root.$message({ message: res.data.message, type: "success" });
                }
            }).catch(err=>{
                throw err
            })
        },
    });
}