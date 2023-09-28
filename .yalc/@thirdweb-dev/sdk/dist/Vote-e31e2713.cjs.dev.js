'use strict';

let VoteType = /*#__PURE__*/function (VoteType) {
  VoteType[VoteType["Against"] = 0] = "Against";
  VoteType[VoteType["For"] = 1] = "For";
  VoteType[VoteType["Abstain"] = 2] = "Abstain";
  return VoteType;
}({});

exports.VoteType = VoteType;
