'use strict';

let RecoveryShareManagement = /*#__PURE__*/function (RecoveryShareManagement) {
  RecoveryShareManagement["USER_MANAGED"] = "USER_MANAGED";
  RecoveryShareManagement["AWS_MANAGED"] = "AWS_MANAGED";
  return RecoveryShareManagement;
}({});
let AuthProvider = /*#__PURE__*/function (AuthProvider) {
  AuthProvider["COGNITO"] = "Cognito";
  return AuthProvider;
}({});

// TODO: Clean up tech debt of random type Objects
// E.g. StoredTokenType is really not used anywhere but it exists as this object for legacy reason

exports.AuthProvider = AuthProvider;
exports.RecoveryShareManagement = RecoveryShareManagement;
