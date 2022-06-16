## sync

rsync -rauvvzm --delete --progress ./ /mnt/c/Users/foote/AppData/Local/Screeps/scripts/screeps.com/default/

```sh
bash -lc ' \
  fswatch -0 ./src/*.js | while read -d "" event; \
  do \
    rsync -rau --delete --progress ./src/ /mnt/c/Users/foote/AppData/Local/Screeps/scripts/screeps.com/default/
  done'
```
