# rundeck-lab-config

Source of truth for the Rundeck Lab. The lab's Rundeck container clones this
repo on startup and applies its contents: projects, jobs, resource files,
plugins, ACLs, and (optionally) global Rundeck properties. Playwright tests
that exercise the target app also live here so they version alongside the
jobs that run them.

## Layout

```
projects/
  Lab/
    project.properties   # resource file source points to resources.xml
    resources.xml        # node definitions for 'target' and 'runner'
    acls/                # project-scoped ACLs (optional)
    jobs/                # job definitions in XML
rundeck-config/          # global Rundeck overrides (optional, requires restart)
system-acls/             # system-scoped ACLs (hot-reloadable)
plugins/                 # drop plugin zip/jar files here (requires restart)
tests/                   # Playwright suite
```

## Deploying a change

1. Edit any file under `projects/Lab/jobs/`, `projects/Lab/acls/`,
   `projects/Lab/resources.xml`, `projects/Lab/project.properties`,
   `system-acls/`, or `tests/`.
2. Commit and push.
3. In Rundeck, run the `sync-from-git` job. New jobs, resources, ACLs, and
   tests are live.

Plugins and `rundeck-config/*.properties` require a Rundeck restart
(`docker compose restart rundeck` from the lab repo).
