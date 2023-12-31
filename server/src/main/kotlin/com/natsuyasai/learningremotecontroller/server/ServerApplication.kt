package com.natsuyasai.learningremotecontroller.server

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@SpringBootApplication
@ComponentScan("com.natsuyasai.learningremotecontroller.server.repository")
@ComponentScan("com.natsuyasai.learningremotecontroller.server.controller")
class ServerApplication

fun main(args: Array<String>) {
	runApplication<ServerApplication>(*args)
}
