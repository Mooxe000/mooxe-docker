@new external proxy: ({..}, {..}) => {..} = "Proxy"

let o = proxy(
  Js.Obj.empty(),
  {
    "get": (_t, p) => {
      if p == "hello" {
        "Hello ReScript"
      } else {
        %raw(`Reflect.get(...arguments)`)
      }
    }
  }
)

Js.log(o["hello"])
Js.log(o["world"])
