# Folkans IT-utbildningar

Frontend for Folkan IT-utbildningar.

## Git strategier

- Bransch från issues
- noga med labels på issues

Pull istället för push, d.v.s. vi assignar oss själva på en issue

- Issue-branch = fritt fram att pusha 1000gr/dag

---- korta codereviews on demand ----

- Allt fungerande innan push till `dev`. 1 ggn/dag

---- team code review ----

- Main push ca 1 ggn/veckan

## Figma link

https://www.figma.com/file/ii1EZtO2bCHWOT9GsPfIjo/Style-guide?node-id=0%3A1&t=pIL8Eo4KOz7srez9-0

## Filstruktur

**assets**

```
*/assets/<viewfolder>/<file>
```

**SCSS**

```
*/scss/global.scss
*/scss/_reset.scss
*/scss/_layout.scss
*/scss/_variables.scss
*/scss/_motion.scss
```

**Component**

```
*/components/<component>/<component>.tsx
*/components/<component>/<component>.scss
```

**Views**

```
*/views/<view>/<view>.tsx
*/views/<view>/<view>.scss
```


## Modeller
```json
{
"questions": [
    {
        "id" : "q1",
        "text" : "Vad...",
        "img" : "asfdfsdf",
        "type": "range", // radios, checkboxes 
        "options" : [
            {
                "id" : "1",
                "text" : "jhdsjhjds fhj sdfhj"
            }
        ]
    }
]
}
```
