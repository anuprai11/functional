const Box = (x) => ({
  map: f=>Box(f(x)),
  inspect:_ => `Box(${x})`,
  fold: f=>f(x),
});

const Right = (x) => ({
  map: f => Right(f(x)),
  inspect:_ => `Right(${x})`,
  fold: (f,g) =>g(x),
});

const Left = (x) => ({
  map: f => Left(x),
  inspect:_ => `Left(${x})`,
  fold: (f,g) =>f(x),
});

module.exports = {
  Box,
  Left,
  Right, 
};
