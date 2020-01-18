export function someTestHelper() {
  // set a breakpoint in following line might not work
  // due to inline sourcemap from tranpiled code emitted by ts-node is loaded dynamically
  // the debugger need some time to process sourcemap and set breakpoint after that
  return 42;
}
