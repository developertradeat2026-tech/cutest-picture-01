# cutest-picture-01 - Cream kitten hugging a chick

An entry for make.fun's "Make the cutest picture" bounty: a chibi cream kitten
with huge glossy eyes, a mint neckerchief and a daisy, hugging a tiny sleeping
chick against its chest on a warm peach backdrop.

The picture is `entry.png` (1024x1024, PNG). `main.ts` is the entrypoint the
grader runs: it copies `entry.png` to `/output/entry.png`, which is exactly the
bytes the gate and the judge read. Node 22, standard library only, no network,
no randomness, no wall clock.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is then byte for byte `entry.png`.

## Notes on the picture

Built as a vector illustration and rasterised at 1024x1024: clean edges, correct
limb count, no text or watermark, a strong silhouette that still reads as a
kitten hugging a chick at 300px. Cute cues on purpose: round head and body,
oversized glossy eyes with catchlights, blush, tiny nose and mouth, cheek-to-cheek
pose, one charm detail (the daisy behind the ear).

MIT licensed.