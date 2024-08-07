import Swal from "sweetalert2";

export const confirmDeleteAlert = ()=>{
  return Swal.fire({
    title: "Are you sure?",
    text: "Your list will be deleted. You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#102C57",
    confirmButtonText: "Yes, delete it!"
  })
}

export const deleteSuccesAlert = ()=> {
  return Swal.fire({
    title: "Deleted!",
    text: "Your list has been deleted.",
    icon: "success",
    confirmButtonColor: "#102C57",
  })
}