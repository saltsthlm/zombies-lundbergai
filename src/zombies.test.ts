import { ok } from "node:assert/strict";
import { test } from "node:test";
import { IRoom } from "./interfaces";
import { addZombie, createRoom, isRoomFull } from "./zombies";

// test 1
test("room is full", () => {
  const room: IRoom = createRoom(0);

  ok(isRoomFull(room));
});

// test 2
test("empty room that fits one zombie is not full", () => {
  const room: IRoom = createRoom(1);

  ok(!isRoomFull(room));
});

// test 3
test("room with no capacity cannot fit any zombies", () => {
  const room: IRoom = createRoom(0);

  const added: boolean = addZombie(room, "Viktor");

  ok(!added);
});

// test 4
test("one-roomer becomes full when a zombie is added", () => {
  const room: IRoom = createRoom(1);

  addZombie(room, "Viktor");

  ok(isRoomFull(room));
});

// test 5
test("two-roomer is not full when a zombie is added", () => {
  const room: IRoom = createRoom(2);

  addZombie(room, "Viktor");

  ok(!isRoomFull(room))
});

// test 6
test("second zombie consumes first zombie when added to a one-roomer", () => {
  const room: IRoom = createRoom(1);

  const firstZombieName = "Viktor";
  const secondZombieName = "Alek";
  addZombie(room, firstZombieName);
  addZombie(room, secondZombieName);

  ok(room.zombies[0].name == secondZombieName);
});

// test 7
test("negative capacity behaves as empty room", () => {
  const room: IRoom = createRoom(-1);

  ok(!addZombie(room, "Viktor"));
  ok(isRoomFull(room));
});