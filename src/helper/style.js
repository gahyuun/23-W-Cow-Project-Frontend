export const signStyle = {
  inputStyle: {
    borderBottom: '1px solid black',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderRadius: '0px',
  },
  buttonColor: {
    backgroundColor: '#3182CE',
    color: '#ffff',
  },

  groupStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }, // text와 inputgroup을 감싸는 박스의 스타일
  TextStyle: {
    fontSize: 'xl',
    fontWeight: '500',
    mr: '10px',
  }, // email, password등의 text 스타일
  FormHelperStyle: {
    fontWeight: '500',
    fontSize: '0.813rem',
    color: '#ff0000',
  },
  inputGroupStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }, // input 그룹과 formhelpertext를 그룹으로 묶는 스타일
  swalFire: {
    width: 400,
    height: 260,
    showConfirmButton: false,
    cancelButtonText: '확인',
    cancelButtonColor: '#CF5E53',
    showCancelButton: true,
    timer: 3000,
  },
};
