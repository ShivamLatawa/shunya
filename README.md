# shunya

## Running emulator

1. Install android studio
2. Run an emulator: AVD Manager -> Start [It should show an android phone on your device]
3. Set adb in path by
    - export PATH=~/Library/Android/sdk/tools:\$PATH
    - export PATH=~/Library/Android/sdk/platform-tools:\$PATH
4. Verify adb by command - adb devices [It should show the list of devices attached]
5. Run command `yarn run android`

## Useful links

-   https://stackoverflow.com/questions/35000729/android-studio-could-not-initialize-class-org-codehaus-groovy-runtime-invokerhel
-   https://stackoverflow.com/questions/61289461/java-lang-noclassdeffounderror-could-not-initialize-class-org-codehaus-groovy-v
-   https://stackoverflow.com/questions/29391511/where-is-android-sdk-root-and-how-do-i-set-it
-   https://stackoverflow.com/questions/54273412/failed-to-install-the-following-android-sdk-packages-as-some-licences-have-not
-   https://github.com/facebook/create-react-app/issues/4540
