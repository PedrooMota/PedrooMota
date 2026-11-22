```yaml
apiVersion: people/v1
kind: Engineer
metadata:
  name: pedro-mota
  namespace: sao-jose-dos-campos
  labels:
    company: embraer
    role: cloud-analyst
    education: eng-computacao
spec:
  replicas: 1                     # ainda não escalo horizontalmente
  cloud: [aws, eks, kubernetes, terraform, docker, github-actions]
  code:  [typescript, nestjs, react, nextjs, react-native, python]
  data:  [postgres, prisma, supabase]
  currentlyBuilding: plataforma-devops   # SSO multi-conta, EKS, saúde e custos
status:
  phase: Running
  conditions:
    - type: OpenTo
      values: [networking, cloud, devops, platform-engineering]
  contact:
    linkedin: https://www.linkedin.com/in/pedro-henrique-mota/
```

### `$ kubectl get repos --sort-by=.lastPush`

<!-- STATUS:START -->
| NAME | STATUS | LANG | STARS | AGE |
|---|---|---|---|---|
| [api-rest-node](https://github.com/PedrooMota/api-rest-node) | 🟢 Running | TypeScript | ⭐ 0 | <1d |
| [app-fitness](https://github.com/PedrooMota/app-fitness) | ⚪ Completed | TypeScript | ⭐ 0 | 8mo |
| [Hackathon-receita-federal](https://github.com/PedrooMota/Hackathon-receita-federal) | ⚪ Completed | TypeScript | ⭐ 0 | 17mo |
| [EC2-AWS](https://github.com/PedrooMota/EC2-AWS) | ⚪ Completed | TypeScript | ⭐ 0 | 2y |
| [saas-rbac-next](https://github.com/PedrooMota/saas-rbac-next) | ⚪ Completed | TypeScript | ⭐ 0 | 2y |
| [fundamentos-DDD](https://github.com/PedrooMota/fundamentos-DDD) | ⚪ Completed | — | ⭐ 0 | 2y |

<sub>Atualizado em 2026-11-22 01:03 UTC pelo GitHub Actions</sub>
<!-- STATUS:END -->

### `$ kubectl logs contributions --follow`

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/PedrooMota/PedrooMota/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/PedrooMota/PedrooMota/output/github-snake.svg" />
  <img alt="Cobrinha comendo o gráfico de contribuições" src="https://raw.githubusercontent.com/PedrooMota/PedrooMota/output/github-snake.svg" />
</picture>
