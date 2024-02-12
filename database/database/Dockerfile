FROM postgres:16.1-bullseye

# 日本語対応
RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/* \
    && localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8

# 設定ファイル等必要なものをコピー
COPY ./config/ /etc/postgresql/

# 設定ファイルの権限更新
RUN chmod 644 /etc/postgresql/