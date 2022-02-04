!macro customUnInstall
  MessageBox MB_YESNO "Delete app config folder?" \
    /SD IDNO IDNO Skipped IDYES Accepted

  Accepted:
    SetShellVarContext current
    RMDir /r "$APPDATA\react-electron-ts"
    RMDir /r "LOCALAPPDATA\react-electron-ts-updater"

    Goto done
  Skipped:
    Goto done
  done:
!macroend