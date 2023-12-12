export const ButtonIndigo = ({ children, ...btnProps }) => {
  console.log("btnProps > ", btnProps);

  return (
    <button
      className="px-[44px] py-2 bg-indigo-600 text-slate-100 hover:text-white hover:bg-indigo-500 rounded"
      {...btnProps}
    >
      {children}
    </button>
  );
};
