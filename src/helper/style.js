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
    fontSize: { sm: '1rem', md: '1.2rem', lg: 'xl' },
    fontWeight: { sm: '500', md: '500', lg: '600' },
    mr: { sm: '3px', md: '7px' },
  }, // email, password등의 text 스타일
  FormHelperStyle: {
    fontWeight: { sm: '300', md: '500', lg: '500' },
    fontSize: { sm: '0.2rem', md: '0.6rem', lg: '0.813rem' },
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
  cardBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1.25rem',
    boxShadow: '0.625rem 0.625rem 1.875rem #c2c2c2',
    w: { sm: 'lg', md: 'xl', lg: '2xl' },
  },
};
