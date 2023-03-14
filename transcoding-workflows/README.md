# Video transcoding workflows


This workflow requires a namespace service tobe configured (preferred):

```yaml
functions:
- id: videotranscoding
  image: wwonigkeit/videotranscoding:latest
  type: knative-workflow
  size: large
```

Namespace service settings:

* Image: wwonigkeit/videotranscoding:latest
* Size: large
* Scale: 1


Also remember to change the settings on the configmap:

```shell
kubectl edit configmap direktiv-config-functions
```