import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types.js';

// Will move later
// var root = {
//   "control" : {
//     "wallethash": "",
//     "derivedChildCount": 0,
//     "tasks": {},
//     "associations": []
//   },
//   "wallet" : {
//     "language" : "",
//     /*xprv:  Extended Private Key (HDPrivateKey)
//     A 256 bit private key and a 256 bit chain code.
//     Any non-hardened path or hardened path can be derived.
//     */
//     "xprv" : "",
//     /* Extended Public key (HDPublicKey)
//     A 512 bit public key and a 256 biy chain code.
//     Any non-hardened path can be derived, but hardened paths cannot be derived.
//     */
//     "xpub" : "",
//     "WIF" : "",
//     "address" : "",
//     "path" : "",
//     "owner" : faker.name.firstName() + ' ' + faker.name.lastName(),
//     "children" : []
//   }
// }

// async function restore(){
//   fs.readFile('D:\\git\\Noscere\\MyMovieServer\\bpwallet.bak', async (err, wallet) => {
//     if (err) throw err;
//         root = JSON.parse(wallet);

//         root.control.tasks = await taskrepo.getTasks()
//         console.log("Tasks restored",root.control.tasks);

//         var localAssociations = root.control.associations

//         for (let i = 0; i < root.control.derivedChildCount; i++) {
//           const childAddress = root.wallet.children[i].address;
//           var associations = await boardrepo.getBoardAssociations(childAddress)
//           localAssociations.push({"address" : childAddress, "associations": associations})
//         }

//         // root.control.associations = localAssociations;
//         console.log("Associations restored",root.control.associations);
//         console.log("Wallet JSON", JSON.stringify(root))
//         close();
//         return root;
//   });
// }

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
