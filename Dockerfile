FROM golang:alpine

LABEL org.opencontainers.image.authors="ats@redventures.com" \
	org.opencontainers.image.vendor="Adversarial and Threat Services" \
	org.opencontainers.image.title="icebreaker" \
	org.opencontainers.image.description="Worker container for ATS scanning" \
	org.opencontainers.image.source="https://github.com/RedVentures/Icebreaker"

# Install basics
RUN apk update 
RUN apk --no-cache add build-base bzr mercurial bash gawk sed grep git gcc make libpcap-dev libpcap linux-headers musl-dev

# Install security tooling
RUN git clone https://github.com/caddyserver/caddy.git
RUN cd caddy/cmd/caddy/; go build; mv caddy /usr/local/bin
# Install some package dependencies
WORKDIR /dist
VOLUME [ "/dist" ]

CMD [ "caddy" ]