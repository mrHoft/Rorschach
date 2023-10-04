# Rorschach the game

[Deploy](https://rorschach.vercel.app/)

### Installation
| Command | Description |
| --- | --- |
| `apt install npm` | Install npm if it is not installed |
| `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh \| bash` | Install nvm |
| `nvm install v18.0.0` | Install node v18.0.0 |
| `nvm alias default v18.0.0` | Set node v18.0.0 as default |
| `pnpm install` | Install project dependencies |

### Usage
| Command | Description |
| --- | --- |
| `dev` | Run project in developer mode |
| `build` | Build project to `dist` |
| `lint` | Linter |

### Features:
- Store class based on localStorage
- Interplay class (context provider)
- Queue class that provides ability to manage closed list of objects
- useAudio hook
- AI generated ambient music

## Требования
1. Вёрстка +10
   - реализован интерфейс игры +5
   - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, [логотип курса](https://rs.school/images/rs_school_js.svg) со [ссылкой на курс](https://rs.school/js-stage0/) +5
2. Логика игры. Ходы, перемещения фигур, другие действия игрока подчиняются определённым свойственным игре правилам +10
3. Реализовано завершение игры при достижении игровой цели +10
4. По окончанию игры выводится её результат, например, количество ходов, время игры, набранные баллы, выигрыш или поражение и т.д +10 
5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр +10
6. Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов +10
7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
   - высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо
